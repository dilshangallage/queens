echo "Channel: $1"
echo "Version: $2"

export NODE_ENV=$1
echo "Building app $NODE_ENV"
#ionic cordova platform remove android
#ionic cordova platform add android@6.2.1
ionic cordova build android

cd platforms/android/build/outputs/apk/
pwd

#rename apk
mv android-debug.apk business-admin-app-unsigned.apk
#qinlk#1

jarsigner --verbose -sigalg SHA1withRSA -digestalg SHA1 -keystore ../../../../../file.keystore -storepass qinlk#1 business-admin-app-unsigned.apk qeen-lk
zipalign -v 4 business-admin-app-unsigned.apk business-admin-app-release-$channel-$version.apk