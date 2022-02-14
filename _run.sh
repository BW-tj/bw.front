export NVM_DIR="$HOME/.nvm" 
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"
nvm use 16 
npm i 
echo "all packages installed"
mv Layouts/ layouts/
npm run build
echo "app built"
echo "starting to run app ....."
npm start
