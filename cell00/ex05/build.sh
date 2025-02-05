
if [ $# -eq 0 ]; then
    echo "No arguments supplied"
fi
for dir in "$@"; do
    mkdir -p "ex$dir"
done