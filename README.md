# శ్రీ కాలభైరవ దేవస్థానం — Sri Kala Bhairava Devasthanam

Official responsive, bilingual website for **Sri Kala Bhairava Devasthanam** (A Sacred Abode of Sri Kala Bhairava & Sri Kalika Matha).

![Sri Kala Bhairava Website](assets/images/sanctum-hero.svg)

---

## 🌟 Key Features

- **Exact Mockup Alignment**: Royal temple aesthetic with Deep Maroon (`#2b080d`) and Divine Gold (`#d4af37`).
- **Complete Bilingual Support**: Seamless dynamic toggle between **తెలుగు (Telugu)** and **English** with persistent user preference in `localStorage`.
- **Top-Tier Google Search SEO**:
  - Structured Data Schema (`@type: HinduTemple`, `PlaceOfWorship`) for rich snippets.
  - Complete meta tags: title, description, keywords, Open Graph, Twitter Cards, canonical URL.
  - `sitemap.xml` and `robots.txt` ready for instant Google Search Console indexing.
- **Easy Image Swapping**:
  - Comes pre-configured with vector SVG placeholders for all deities, sanctum, and gallery photos.
  - Automatic fallback: If you drop a real JPG photo into `assets/images/` (e.g. `deity-bhairava.jpg`), it displays your real photo immediately!
- **Interactive Modals & Lightbox**:
  - 🎥 **Live Darshan** stream modal with status indicator.
  - 🪷 **Seva Booking** inquiry form modal.
  - 🪔 **Temple Details** modals for Sri Kala Bhairava Swamy and Sri Kalika Matha.
  - 🖼️ **Photo Lightbox** with full zoom view.
- **Mobile Responsive Design**:
  - Touch-optimized sticky bottom navigation bar (`Home`, `Temples`, `Seva`, `Gallery`, `More`).
  - Slide-out mobile drawer menu.

---

## 📁 Project Structure

```text
kala-bhairava-devasthanam/
├── index.html                 # Main website HTML with SEO & Schema markup
├── styles.css                 # Master responsive stylesheet
├── script.js                  # Client logic: translations, modals, navigation
├── sitemap.xml                # Search engine sitemap
├── robots.txt                 # Search engine crawler permissions
├── README.md                  # Project documentation & guide
└── assets/
    └── images/
        ├── logo.svg           # Temple emblem & medallion
        ├── sanctum-hero.svg   # Sanctum sanctorum background illustration
        ├── deity-bhairava.svg # Sri Kala Bhairava deity placeholder
        ├── deity-kalika.svg   # Sri Kalika Matha deity placeholder
        ├── gallery-1.svg      # Temple Gopuram
        ├── gallery-2.svg      # Deepotsavam
        ├── gallery-3.svg      # Special Alankaram
        ├── gallery-4.svg      # Utsava Murthi Procession
        ├── gallery-5.svg      # Chandi Homam
        └── gallery-6.svg      # Garbhagriha
```

---

## 🖼️ How to Add or Replace Photos

To replace any placeholder with your authentic temple photos, simply copy your photo files into `assets/images/`:

| Element | Recommended File Name | Location |
| :--- | :--- | :--- |
| **Temple Logo** | `logo.png` or `logo.svg` | `assets/images/logo.png` |
| **Lord Kala Bhairava** | `deity-bhairava.jpg` | `assets/images/deity-bhairava.jpg` |
| **Sri Kalika Matha** | `deity-kalika.jpg` | `assets/images/deity-kalika.jpg` |
| **Sanctum Background** | `sanctum-hero.jpg` | `assets/images/sanctum-hero.jpg` |
| **Gallery Photos** | `gallery-1.jpg`, `gallery-2.jpg`, etc. | `assets/images/` |

---

## 🌐 Custom Domain Setup Guide

Once you have your custom domain (e.g. `kalabhairavadevasthanam.org`):

### 1. In this Repository:
Create a file named `CNAME` in the repository root containing your domain:
```text
kalabhairavadevasthanam.org
```

### 2. In your Domain Registrar (GoDaddy, Namecheap, Cloudflare, etc.):
Add the following DNS records:

#### **A Records** (Points apex domain to GitHub Pages):
- **Type**: `A` | **Host/Name**: `@` | **Value**: `185.199.108.153`
- **Type**: `A` | **Host/Name**: `@` | **Value**: `185.199.109.153`
- **Type**: `A` | **Host/Name**: `@` | **Value**: `185.199.110.153`
- **Type**: `A` | **Host/Name**: `@` | **Value**: `185.199.111.153`

#### **CNAME Record** (Points `www` subdomain):
- **Type**: `CNAME` | **Host/Name**: `www` | **Value**: `sannivesham.github.io`

### 3. In GitHub Repository Settings:
1. Go to **Settings** > **Pages**.
2. Under **Custom domain**, enter `kalabhairavadevasthanam.org`.
3. Check the box **Enforce HTTPS**.

---

## 🔍 Google Search Ranking Tips
1. Go to [Google Search Console](https://search.google.com/search-console).
2. Add your property (`https://sannivesham.github.io/kala-bhairava-devasthanam/` or your custom domain).
3. Submit your sitemap: `https://<your-domain>/sitemap.xml`.
4. Request Indexing for the homepage.
