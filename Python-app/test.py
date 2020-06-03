import smtplib
import ssl
from email.mime.text import MIMEText

def send():
    EMAIL_BACKEND = 'django.core.mail.backends.smtp.EmailBackend'
    EMAIL_USE_TLS = True
    EMAIL_HOST = 'smtp.gmail.com'
    EMAIL_HOST_USER = 'suferparadisetony@gmail.com'
    EMAIL_HOST_PASSWORD = '!Tony12089'
    EMAIL_PORT = 587

    port = EMAIL_PORT
    smtp_server = EMAIL_HOST
    sender_email = EMAIL_HOST_USER
    password = EMAIL_HOST_PASSWORD
    receiver_email = 'antoniol@supermicro.com'
    subject = 'HelloHellow123'
    body = 'get get a ticket.'
    message = 'Subject: {}\n\n{}'.format(subject, body)
    context = ssl.create_default_context()
    with smtplib.SMTP(smtp_server, port) as server:
        server.ehlo()  # Can be omitted
        server.starttls(context=context)
        server.ehlo()  # Can be omitted
        server.login(sender_email, password)
        server.sendmail(sender_email, receiver_email, message)
    return

def main():
    send()

if __name__ == "__main__":
    main()
