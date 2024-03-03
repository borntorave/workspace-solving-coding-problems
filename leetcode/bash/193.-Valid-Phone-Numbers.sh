# prepare local run
#!/bin/bash
input = "193_input.txt"

# one line solution
grep -P '^(\d{3}-|\(\d{3}\) )\d{3}-\d{4}$' file.txt

# basic solution
while read -r line
do 
  if [[ "$line" != "-" && "$line" != "(" && "$line" != ")" ]] 
  then 
    sed -i '/'$line'/d' input.file
  fi
done < input.file
