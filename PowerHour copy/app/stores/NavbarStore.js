import alt from '../alt';
import NavbarActions from '../actions/NavbarActions';

class NavbarStore {
  constructor() {
    this.bindActions(NavbarActions);
    this.totalCharacters = 0;
    this.onlineUsers = 0;
  }

  // onUpdateOnlineUsers(data) {
  //   this.onlineUsers = data.onlineUsers;
  // }

  // onGetCharacterCountSuccess(data) {
  //   this.totalCharacters = data.count;
  // }

  // onGetCharacterCountFail(jqXhr) {
  //   toastr.error("failed to get characters");
  // }
}

export default alt.createStore(NavbarStore);