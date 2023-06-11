const mail = require("@sendgrid/mail");
const key = process.env.SENDGRID_API_KEY;
mail.setApiKey(key);

export default async (req, res) => {
  const body = JSON.parse(req.body);

  const message = `
  Name: ${body.name}<br/>
  Email: ${body.email}<br/>
  Message: ${body.message}<br/>`;

  const data = {
    to: "danielchochlinski@gmail.com",
    from: "dch-dev@danielchochlinski.com",
    test: message,
    html: message,
  };
  try {
    await mail.send(data);

    res.status(200).json({ status: "Ok" });
  } catch (error) {
    res.status(400).send("Something went wrong");
  }
};
