#./upload.sh --สั่งทำงานทุกคำสั่งในไฟล์นี้
#user: lms passwd: it[[zhk@10670 it[[zhk@10670
tsc
find ./dist -name '*.map' -type f -delete
scp -r dist/. lms@203.157.88.89:/var/www/app/api/lms/app
scp auto_reload lms@203.157.88.89:/var/www/app/api/lms
# scp .env lms@203.157.88.89:/var/www/app/api/lms
# scp *.json lms@203.157.88.89:/var/www/app/api/lms