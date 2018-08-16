import fire from '../fire';

export default function writeNewPost(fullName, emailAddress, selectedNetwork, mobileNumber, date, uniqueId, winningCodeConfirmation) {

  // A post entry.
  let postData = {
    fullName,
    emailAddress,
    selectedNetwork,
    mobileNumber,
    date,
    uniqueId,
    winningCodeConfirmation
  };
  // Get a key for a new Post.
  let newPostKey = fire.database().ref().child('users').push().key;

  // Write the new post's data simultaneously in the posts list and the user's post list.
  let updates = {};
  let updatesBackUp = {};
  updates[`/users/${newPostKey}/user/`] = postData;
  updatesBackUp[`/usersBackUp/${newPostKey}/user/`] = postData;

  fire.database().ref('usersDailyBackupCount').update(postData);
  fire.database().ref().update(updatesBackUp);
  return fire.database().ref().update(updates);
}