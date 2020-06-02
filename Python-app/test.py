from sendmail import MailSender

def main():

    plaintext = "Hello John, \n" \
                "I'm just testing my new fancypants email sending system here.\n" \
                "Antonio"
    ourmailsender = MailSender('suferparadise@gmail.com', '!Tony12089', ('smtp.gmail.com', 587))
    ourmailsender.set_message(plaintext, "This is a test", "Adam Adamson")
    ourmailsender.set_recipients(['antoniol@supermicro.com'])
    ourmailsender.connect()
    ourmailsender.send_all()

if __name__ == '__main__':
    main()