FROM nginx:alpine

WORKDIR /usr/share/nginx/html

RUN apk add --no-cache nodejs npm

COPY about.html ./
COPY article.html ./
COPY associated-projects.html ./
COPY contact.html ./
COPY events.html ./
COPY experimental-sandbox.html ./
COPY index.html ./
COPY lectures-workshops.html ./
COPY page.html ./
COPY shortstory-vm-1.html ./
COPY shortstory-vm-2.html ./
COPY shortstory-vm-3.html ./
COPY shortstory-vm-4.html ./
COPY shortstory-vm-5.html ./
COPY shortstory-vm-6.html ./
COPY writings.html ./
COPY assets ./assets
COPY content ./content
COPY css ./css
COPY js ./js
COPY modules ./modules
COPY static-pages ./static-pages

EXPOSE 80
