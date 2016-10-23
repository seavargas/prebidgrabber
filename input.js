if (typeof(Storage) !== "undefined") {
    // Code for localStorage/sessionStorage.
    //store the text entered in the input fields
  //  localStorage.setItem("input0", "technology");

        chrome.storage.sync.set({'input0': 'technology'}, function() {
          // Notify that we saved.
          message('Settings saved');
        });

} else {
    //No Web Storage support..
}