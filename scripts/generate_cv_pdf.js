const puppeteer = require("puppeteer");
const path = require("path");

(async () => {
  try {
    const browser = await puppeteer.launch({ headless: true });
    const page = await browser.newPage();

    const filePath = path.resolve(__dirname, "..", "professional_cv.html");
    const fileUrl = "file://" + filePath.replace(/\\/g, "/");

    await page.goto(fileUrl, { waitUntil: "networkidle0" });

    await page.pdf({
      path: path.resolve(__dirname, "..", "CV.pdf"),
      format: "A4",
      printBackground: true,
      margin: { top: "20mm", bottom: "20mm", left: "15mm", right: "15mm" },
    });

    await browser.close();
    console.log("CV.pdf generated successfully.");
  } catch (err) {
    console.error("Error generating PDF:", err);
    process.exit(1);
  }
})();
