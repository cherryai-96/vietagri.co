import re

with open('src/pages/VietWolffia.tsx', 'r') as f:
    content = f.read()

# Extract the galleryItems array
pattern = r"(  const galleryItems = \[\n)(.*?)(\n  \];)"
match = re.search(pattern, content, flags=re.DOTALL)
if not match:
    print("Could not find galleryItems")
    exit(1)

items_str = match.group(2)

# Split items roughly by "    },"
raw_items = items_str.split("    },")
parsed_items = []
for i, item in enumerate(raw_items):
    item = item.strip()
    if not item:
        continue
    if not item.endswith("}"):
        item += "\n    }"
    parsed_items.append(item)

# Separate beverages and others
beverages = []
others = []

for item in parsed_items:
    if "category: 'beverage'" in item:
        beverages.append(item)
    else:
        others.append(item)

# Reorder beverages
# We have 19 beverages (Wolffia Shake + 18 w-drink)
# Let's use a stride of 7 to shuffle them so consecutive numbers are far apart
reordered_beverages = []
stride = 7
for i in range(len(beverages)):
    idx = (i * stride) % len(beverages)
    # just basic permutation
reordered_beverages = [None] * len(beverages)
for i in range(len(beverages)):
    reordered_beverages[i] = beverages[(i * 7) % len(beverages)]

# In case the permutation misses elements (gcd(19, 7) == 1, so it won't)
assert len(set(reordered_beverages)) == len(beverages)

# Recombine
new_items = others + reordered_beverages

# format it nicely
new_items_str = ",\n".join(["    " + x if not x.startswith("    ") else x for x in new_items])

new_content = content[:match.start(2)] + new_items_str + content[match.end(2):]

with open('src/pages/VietWolffia.tsx', 'w') as f:
    f.write(new_content)
print("Success")
