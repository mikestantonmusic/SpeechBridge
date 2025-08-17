#!/usr/bin/env python3
"""
Simple script to create placeholder assets for the Chinese vocabulary learning mobile app.
Run this script to generate the required image files referenced in app.json.

Requirements: pip install pillow
Usage: python create_assets.py
"""

from PIL import Image, ImageDraw, ImageFont
import os

def create_app_icon():
    """Create main app icon (1024x1024)"""
    size = (1024, 1024)
    img = Image.new('RGBA', size, (30, 64, 175, 255))  # Blue background
    draw = ImageDraw.Draw(img)
    
    # Try to use a large font, fallback to default
    try:
        font_large = ImageFont.truetype("arial.ttf", 200)
        font_small = ImageFont.truetype("arial.ttf", 80)
    except:
        font_large = ImageFont.load_default()
        font_small = ImageFont.load_default()
    
    # Draw Chinese character for "learning" (学)
    draw.text((512, 300), "学", font=font_large, anchor="mm", fill="white")
    
    # Draw "HSK" text
    draw.text((512, 600), "HSK", font=font_small, anchor="mm", fill="white")
    
    # Draw audio wave lines
    for i, height in enumerate([40, 60, 80, 60, 40]):
        x = 400 + i * 60
        y1 = 750 - height // 2
        y2 = 750 + height // 2
        draw.rectangle([x, y1, x + 20, y2], fill="white")
    
    return img

def create_adaptive_icon():
    """Create Android adaptive icon (1024x1024)"""
    size = (1024, 1024)
    img = Image.new('RGBA', size, (0, 0, 0, 0))  # Transparent background
    draw = ImageDraw.Draw(img)
    
    # Draw in center circle (safe area)
    try:
        font = ImageFont.truetype("arial.ttf", 300)
    except:
        font = ImageFont.load_default()
    
    # Draw Chinese character
    draw.text((512, 512), "学", font=font, anchor="mm", fill="white")
    
    return img

def create_splash_screen():
    """Create splash screen (1284x2778)"""
    size = (1284, 2778)
    img = Image.new('RGBA', size, (30, 64, 175, 255))  # Blue background
    draw = ImageDraw.Draw(img)
    
    try:
        font_large = ImageFont.truetype("arial.ttf", 200)
        font_medium = ImageFont.truetype("arial.ttf", 80)
        font_small = ImageFont.truetype("arial.ttf", 60)
    except:
        font_large = ImageFont.load_default()
        font_medium = ImageFont.load_default()
        font_small = ImageFont.load_default()
    
    # Center content
    center_x = 642
    center_y = 1389
    
    # App title
    draw.text((center_x, center_y - 200), "Chinese Vocabulary", font=font_medium, anchor="mm", fill="white")
    draw.text((center_x, center_y - 100), "Learning", font=font_medium, anchor="mm", fill="white")
    
    # Chinese character
    draw.text((center_x, center_y + 50), "学", font=font_large, anchor="mm", fill="white")
    
    # HSK subtitle
    draw.text((center_x, center_y + 200), "HSK Levels 1-6", font=font_small, anchor="mm", fill="white")
    
    return img

def create_favicon():
    """Create favicon (48x48)"""
    size = (48, 48)
    img = Image.new('RGBA', size, (30, 64, 175, 255))  # Blue background
    draw = ImageDraw.Draw(img)
    
    try:
        font = ImageFont.truetype("arial.ttf", 30)
    except:
        font = ImageFont.load_default()
    
    # Simple "中" character for Chinese
    draw.text((24, 24), "中", font=font, anchor="mm", fill="white")
    
    return img

def main():
    """Create all required assets"""
    assets_dir = "."
    
    print("Creating mobile app assets...")
    
    # Create app icon
    icon = create_app_icon()
    icon.save(os.path.join(assets_dir, "icon.png"))
    print("✓ Created icon.png (1024x1024)")
    
    # Create adaptive icon
    adaptive_icon = create_adaptive_icon()
    adaptive_icon.save(os.path.join(assets_dir, "adaptive-icon.png"))
    print("✓ Created adaptive-icon.png (1024x1024)")
    
    # Create splash screen
    splash = create_splash_screen()
    splash.save(os.path.join(assets_dir, "splash.png"))
    print("✓ Created splash.png (1284x2778)")
    
    # Create favicon
    favicon = create_favicon()
    favicon.save(os.path.join(assets_dir, "favicon.png"))
    print("✓ Created favicon.png (48x48)")
    
    print("\nAll assets created successfully!")
    print("Your mobile app should now display properly with these placeholder icons.")
    print("You can replace these with custom-designed icons later.")

if __name__ == "__main__":
    main()