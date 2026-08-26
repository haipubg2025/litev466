import re

with open('src/utils/gameplaySystemInstruction.ts', 'r') as f:
    content = f.read()

# Replace `<json_MC>` with <json_MC> or escape the backticks: \`<json_MC>\`
# Since this is a .ts file returning a string, we need to make sure there are no raw backticks in the return string.
# Let's just remove the backticks around <json_MC>.

new_content = content.replace("`<json_MC>`", "<json_MC>")

with open('src/utils/gameplaySystemInstruction.ts', 'w') as f:
    f.write(new_content)
print("done")
