# HotelHub

A hotel website with a separate admin interface, built as a learning project.

**Status: front-end complete, Django back end unfinished.** The pages look and
behave like a real site, but nothing is saved yet. Every form shows a preview
message instead of writing to a database.

## What works today

| Area | State |
|---|---|
| Customer pages (home, rooms, booking, dining, pool) | Done — static HTML + CSS |
| Guest login / register pages | Layout only — no authentication |
| Admin login and dashboard | Layout only — no authentication |
| Django project scaffold (`config`, `accounts`) | Created, nearly empty |
| Database models, bookings, orders, payments | **Not built** |

## Pages

- `index.html` — homepage
- `rooms.html` — room catalogue
- `booking.html` — booking form preview
- `food.html` — menu with a client-side cart preview
- `swimming-pool.html` — pool access page
- `login.html` / `register.html` — guest account previews
- `admin-login.html` — separate admin login preview
- `hotelhubadmin.html` — separate admin dashboard preview

## Run the front end

Open `index.html` directly, or serve the folder:

```bash
python -m http.server 8000
```

Then visit <http://127.0.0.1:8000>.

## Run the Django side

The back end is scaffolding only. It serves the default Django admin at
`/admin/` and nothing else.

```bash
python -m venv .venv
.venv\Scripts\activate
pip install django
python manage.py migrate
python manage.py runserver
```

## Still to build

- Models for rooms, bookings, food orders, pool sessions and payments
- Real guest registration and login (replace the preview alerts)
- Secure admin authentication, separate from guest accounts
- Paystack payment verification
- Connecting the static pages to Django views and templates

## Security notes

- `SECRET_KEY` is read from the `DJANGO_SECRET_KEY` environment variable and
  falls back to a local development placeholder. Set a real value before
  deploying anything.
- `DEBUG = True` is for local development only.
- `.venv/`, `db.sqlite3` and `.env` are git-ignored.

## Copyright

© 2026 HotelHub. All rights reserved.

The source is public for viewing and learning. The HotelHub name, copy, design
and code may not be reused commercially without permission.
