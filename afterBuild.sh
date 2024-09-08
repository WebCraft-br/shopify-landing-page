# LC_ALL=C find "dist" -type f -exec sed -i '' 's/\/assets/./assets/g' {} +

# LC_ALL=C find "dist" -type f -exec sed -i 's/\/assets/./assets/g' {} \;

sed -i '' 's/\/assets/\.\/assets/g' "dist/index.html"


echo "Fixed"