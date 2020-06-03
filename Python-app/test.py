import smtplib
from email.mime.text import MIMEText

def send():
    smtp_ssl_host = 'smtp.gmail.com'  # smtp.mail.yahoo.com
    smtp_ssl_port = 465
    username = 'suferparadisetony@gmail.com'
    password = '!Tony12089'
    sender = 'suferparadisetony@gmail.com'
    targets = ['antoniol@supermicro.com']

    msg = MIMEText('Hi, how are you today?')
    msg['Subject'] = 'Hello'
    msg['From'] = sender
    msg['To'] = ', '.join(targets)

    server = smtplib.SMTP_SSL(smtp_ssl_host, smtp_ssl_port)
    server.login(username, password)
    server.sendmail(sender, targets, msg.as_string())

def main():
    send()

if __name__ == "__main__":
    main()
