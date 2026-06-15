import re

with open('src/i18n.tsx', 'r') as f:
    content = f.read()

replacements = {
    "'An Integrated Agricultural Supply Chain Ecosystem'": "'An Integrated Agricultural<br class=\"hidden md:block\" /> Supply Chain Ecosystem'",
    "'Innovation in Action: The Viet Wolffia Model'": "'Innovation in Action:<br class=\"hidden md:block\" /> The Viet Wolffia Model'",
    "'Demonstrating High-Tech, Export-Ready Cultivation'": "'Demonstrating High-Tech,<br class=\"hidden md:block\" /> Export-Ready Cultivation'",
    "'Built for the Global Standard'": "'Built for the<br class=\"hidden md:block\" /> Global Standard'",
    "'Secure Your Supply Chain in Vietnam'": "'Secure Your Supply Chain<br class=\"hidden md:block\" /> in Vietnam'",
    
    "'Rooted in Vietnam. Reaching the World.'": "'Rooted in Vietnam.<br class=\"hidden md:block\" /> Reaching the World.'",
    "'Your Trusted Gatekeeper in Vietnam'": "'Your Trusted Gatekeeper<br class=\"hidden md:block\" /> in Vietnam'",
    "'Why Global Corporations Choose VAC'": "'Why Global Corporations<br class=\"hidden md:block\" /> Choose VAC'",
    
    "'End-to-End Solutions for Global Agriculture'": "'End-to-End Solutions<br class=\"hidden md:block\" /> for Global Agriculture'",
    "'Your On-the-Ground Partner in Vietnam'": "'Your On-the-Ground Partner<br class=\"hidden md:block\" /> in Vietnam'",
    "'Global Agricultural Sourcing Services'": "'Global Agricultural<br class=\"hidden md:block\" /> Sourcing Services'",
    "'High-Tech Contract Farming & Investment'": "'High-Tech Contract Farming<br class=\"hidden md:block\" /> & Investment'",
    "'Export Quality Assurance'": "'Export Quality<br class=\"hidden md:block\" /> Assurance'",
    "'Global Logistics & Trade Documentation'": "'Global Logistics &<br class=\"hidden md:block\" /> Trade Documentation'",
    "'Ready to streamline your agricultural supply chain?'": "'Ready to streamline<br class=\"hidden md:block\" /> your agricultural supply chain?'",
    
    "'Viet Wolffia Superfood'": "'Viet Wolffia<br class=\"hidden md:block\" /> Superfood'",
    "'The World’s Smallest, Most Nutrient-Dense Plant'": "'The World’s Smallest,<br class=\"hidden md:block\" /> Most Nutrient-Dense Plant'",
    "'Precision Agriculture in Clean & Controlled Environments'": "'Precision Agriculture in<br class=\"hidden md:block\" /> Clean & Controlled Environments'",
    "'Optimized Canvas Pond Architecture'": "'Optimized Canvas<br class=\"hidden md:block\" /> Pond Architecture'",
    "'Air & Light Management'": "'Air & Light<br class=\"hidden md:block\" /> Management'",
    "'Uncompromising Water Purity'": "'Uncompromising<br class=\"hidden md:block\" /> Water Purity'",
    "'Versatile Nutrition for a Hungry World'": "'Versatile Nutrition<br class=\"hidden md:block\" /> for a Hungry World'",
    "'Procure Viet Wolffia for Your Operations'": "'Procure Viet Wolffia<br class=\"hidden md:block\" /> for Your Operations'",
    "'Viet Wolffia Recipe & Operations Gallery'": "'Viet Wolffia Recipe<br class=\"hidden md:block\" /> & Operations Gallery'",
    
    "'Cultivating a Resilient Global Supply Chain'": "'Cultivating a Resilient<br class=\"hidden md:block\" /> Global Supply Chain'",
    "'Sustainability is Our Standard'": "'Sustainability<br class=\"hidden md:block\" /> is Our Standard'",
    "'Elevating Supply Chains to Premium Standards'": "'Elevating Supply Chains<br class=\"hidden md:block\" /> to Premium Standards'",
    "'Building Zero-Waste Agricultural Ecosystems'": "'Building Zero-Waste<br class=\"hidden md:block\" /> Agricultural Ecosystems'",
    "'Measurable Impact for Corporate Reporting'": "'Measurable Impact<br class=\"hidden md:block\" /> for Corporate Reporting'",
    "'Ready to Certify Your Supply Chain?'": "'Ready to Certify<br class=\"hidden md:block\" /> Your Supply Chain?'",
    
    "'Let’s Build a Sustainable Supply Chain Together'": "'Let’s Build a Sustainable<br class=\"hidden md:block\" /> Supply Chain Together'"
}

new_content = content
for old, new in replacements.items():
    # Only replace in the English section. We can just use string replace.
    # It will only match exactly the keys in English.
    new_content = new_content.replace(old, new)

with open('src/i18n.tsx', 'w') as f:
    f.write(new_content)

print("Replaced English successfully.")
