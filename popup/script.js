// Reference to the button element
const addSiteButton = document.getElementById("addSiteButton");

// Event listener for the addSiteButton
addSiteButton.addEventListener('click', function() {
  // Fetch tabs
  chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
    // Get cuurent tab
    const activeTab = tabs[0];

    // Get current URL
    const activeTabUrl = activeTab.url;

    console.log(activeTabUrl);

    const thirdSlashIndex = getPosition(activeTabUrl, '/', 3);

    console.log(thirdSlashIndex);

    const urlPrefix = activeTabUrl.substring(0, thirdSlashIndex);

    console.log('prefix: ' + urlPrefix);
  });
});

function getPosition(activeTabUrl, character, frequency) {
  for (let i = 0; i < activeTabUrl.length; i++) {
    if (activeTabUrl[i] == character) {
      --frequency;
      if (frequency == 0) return i;
    }
  }

  return activeTabUrl.lenght;
}
