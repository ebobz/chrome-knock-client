chrome.app.runtime.onLaunched.addListener(function() {
  chrome.app.window.create('knock.html', {
    'bounds': {
      'width': 400,
      'height': 500
    }
  });
});
