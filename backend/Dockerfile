# Pull base image
FROM python:3.7

# Set environment variables
ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

# Set work directory
WORKDIR /woodie_api

# Install dependencies
COPY ./requirements.txt /requirements.txt
# RUN apk add --update --no-cache postgresql-client jpeg-dev
# RUN apk add --update --no-cache --virtual .tmp-build-deps \
#     gcc libc-dev linux-headers postgresql-dev musl-dev zlib zlib-dev
RUN pip install -r /requirements.txt

# Copy project
COPY ./woodie_api /woodie_api