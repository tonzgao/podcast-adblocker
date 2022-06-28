FROM phusion/passenger-nodejs

# Set correct environment variables.
ENV HOME /root
ENV NODE_ENV=production

# Use baseimage-docker's init system.
CMD ["/sbin/my_init"]

# Enable Nginx and Passenger
RUN rm -f /etc/service/nginx/down
RUN rm /etc/nginx/sites-enabled/default

COPY ./build/init.d /etc/my_init.d/40_app.sh
RUN chmod +x RUN chmod +x /etc/init.d/podcast-adblocker

COPY --chown=app:app ./build/nginx.conf /etc/nginx/sites-enabled/podcast-adblocker.conf

COPY --chown=app:app dist /home/app/podcast-adblocker/dist
COPY --chown=app:app node_modules /home/app/podcast-adblocker/node_modules