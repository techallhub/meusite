using System.Net.Mail;

namespace aspnet_mailer {
    public partial class index : System.Web.Page {
        protected void Page_Load(object sender, EventArgs e) {
            to.Text = "techall@hotmail.com.br";
            from.Text = "techall@hotmail.com.br";
            suject.Text = "This is a test";
            body.Text = "Demonstration for website";
        }

        protected void send_Click(object sender, EventsArgs e) {
            try {
                MailMessage message = new MailMessage(to.Text, from.Text, subject.Text, body.Text);
                message.IsBodyHtml = true;

            SmtpClient client = new SmtpClient("smtp.outlook.com", 587);
            client.EnableSsl = true;
            client.Credentials = new System.Net.NetworkCredential("techall@hotmail.com.br", "Ainouta@773912");
            client.Send(message);
            status.Text = "E-mail enviado com sucesso!";
            }

            catch (Exception ex) {
                status.Text = ex.StackTrace;
            }
        }
    }
}