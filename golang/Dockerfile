FROM golang:alpine
RUN mkdir /app 
ADD . /app/
WORKDIR /app 
RUN go build -o hello .
RUN adduser -S -D -H -h /app antonio
USER antonio
CMD ["./hello"]
