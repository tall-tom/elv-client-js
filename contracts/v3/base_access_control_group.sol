pragma solidity 0.4.24;

//import "./ownable.sol";
import {BaseFactory} from "./base_content_space.sol";
import {AccessIndexor} from "./access_indexor.sol";
import {Editable} from "./editable.sol";
import {Container} from "./container.sol";
import {IUserSpace, INodeSpace} from "./base_space_interfaces.sol";


/* -- Revision history --
BsAccessCtrlGrp20190222140700ML: First versioned released
BsAccessCtrlGrp20190315172900ML: Migrated to 0.4.24
BsAccessCtrlGrp20190506153800ML: Adds access indexing
BsAccessCtrlGrp20190510150700ML: Fixes bug (wrong index was used for group rights)
BsAccessCtrlGrp20190722161600ML: Made editable
BsAccessCtrlGrp20190722214400ML: Provides the list of members and managers
BsAccessCtrlGrp20190723130500ML: Fixes typo in managersNum
BsAccessCtrlGrp20190723165900ML: Fixes deletion/adding to groups
BsAccessCtrlGrp20200204160600ML: Removes commented out sections
BsAccessCtrlGrp20200305113000ML: Overloads checkRights to reflect difference between groups and wallets
BsAccessCtrlGrp20200316121700ML: Leverages inherited hasAccess
*/


contract BaseAccessControlGroup is AccessIndexor, Editable {

    bytes32 public version ="BsAccessCtrlGrp20200316121700ML"; //class name (max 16), date YYYYMMDD, time HHMMSS and Developer initials XX

    //mapping (address => bool) public members;
    //mapping (address => bool) public managers;

    address[] public membersList;
    uint256 public membersNum;
    address[] public managersList;
    uint256 public managersNum;

    event MemberAdded(address candidate);
    event ManagerAccessGranted(address candidate);
    event MemberRevoked(address candidate);
    event ManagerAccessRevoked(address candidate);
    event UnauthorizedOperation(uint operationCode, address candidate);

    event OAuthStatusChanged(bool enabled);

    bool public oauthEnabled;

    constructor(address content_space) public {
        contentSpace = content_space;
        membersNum = 0;
        managersList.push(creator);
        managersNum = 1;
        oauthEnabled = false;
        indexCategory =  CATEGORY_GROUP; //2
    }

    function setOAuthEnabled(bool _enabled) public onlyOwner {
        oauthEnabled = _enabled;
        emit OAuthStatusChanged(_enabled);
    }

    function grantManagerAccess(address manager) public onlyOwner {
        bool already = false;
        for (uint i = 0; i < managersNum; i++) {
            if (managersList[i] == manager) {
                already = true;
                break;
            }
        }
        if (already == false) {
            if (managersList.length == managersNum) {
                managersList.push(manager);
            } else {
                managersList[managersNum] = manager;
            }
            managersNum++;
        }
        emit ManagerAccessGranted(manager);
        setRights(manager, TYPE_EDIT, ACCESS_TENTATIVE);
    }

    function revokeManagerAccess(address manager) public {
        require((msg.sender == owner) || (msg.sender == manager));
        for (uint i = 0; i < managersNum; i++) {
            if (managersList[i] == manager) {
                delete managersList[i];
                if (i != (managersNum - 1)) {
                    managersList[i] = managersList[managersNum - 1];
                    delete managersList[managersNum - 1];
                }
                managersNum--;
                break;
            }
        }
        emit ManagerAccessRevoked(manager);
        setRights(manager, TYPE_EDIT, ACCESS_NONE);
    }

    function hasManagerAccess(address candidate) public view returns (bool) {
        return hasEditorRight(candidate);
    }


    function hasAccessRight(address candidate, bool mgr) public view returns (bool) {
        if (mgr == true) {
             return hasEditorRight(candidate);
        } else {
            return hasAccess(candidate);
        }
    }

    function grantAccess(address candidate) public {
        require(hasManagerAccess(msg.sender) == true);
        bool already = false;
        for (uint i = 0; i < membersNum; i++) {
            if (membersList[i] == candidate) {
                already = true;
                break;
            }
        }
        if (already == false) {
            if (membersList.length == membersNum) {
                membersList.push(candidate);
            } else {
                membersList[membersNum] = candidate;
            }
            membersNum++;
        }

        emit MemberAdded(candidate);
        setRights(candidate, TYPE_ACCESS, ACCESS_TENTATIVE);
    }

    function revokeAccess(address candidate) public {
        require((hasManagerAccess(msg.sender) == true) || (msg.sender == candidate));
        for (uint i = 0; i < membersNum; i++) {
            if (membersList[i] == candidate) {
                delete membersList[i];
                if (i != (membersNum - 1)) {
                    membersList[i] = membersList[membersNum - 1];
                    delete membersList[membersNum - 1];
                }
                membersNum--;
                break;
            }
        }
        emit MemberRevoked(candidate);
        setRights(candidate, TYPE_ACCESS, ACCESS_NONE);
    }

    /*
    function hasAccess(address candidate) public view returns (bool) {
        return hasAccessRight(candidate, false);
    }
*/

    function canConfirm() public view returns (bool) {
        INodeSpace ns = INodeSpace(contentSpace);
        return ns.canNodePublish(msg.sender);
    }

    function checkRights(uint8 index_type, address obj, uint8 access_type) public view returns(bool) {
        return checkDirectRights(index_type, obj, access_type);
    }

}
