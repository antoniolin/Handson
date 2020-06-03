import smtplib, ssl

def main(event, data):
    port = 587  # For starttls
    smtp_server = "smtp.gmail.com"
    sender_email = "suferparadisetony@gmail.com"
    receiver_email = "antoniol@supermicro.com"
    password = "!Tony12089"
    message = """\
    Subject: Hi there

    This message is sent from Python."""

    context = ssl.create_default_context()
    with smtplib.SMTP(smtp_server, port) as server:
        server.ehlo()  # Can be omitted
        server.starttls(context=context)
        server.ehlo()  # Can be omitted
        server.login(sender_email, password)
        server.sendmail(sender_email, receiver_email, message)