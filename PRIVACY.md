# Abstractica — Privacy Policy

**Version 1.0 · Effective September 11, 2026**

This policy explains what happens to personal data when you use **Abstractica**,
the desktop application published by **Elsewares**, doing business as
Elsewares, LLC, of 7010 N Sheridan Road, Chicago, Illinois (**"Elsewares," "we," "us"**). It forms part of the
[End User License Agreement](EULA.md).

---

## The short version

- **Abstractica has no accounts, no analytics, and no telemetry.** It does not
  report what you do with it.
- **Your campaigns, journals, characters, and notes never leave your computer**
  through the Software. We have no copy of them and no way to obtain one.
- **The only thing the Software sends anywhere is a license check** — your
  license key and a random identifier — and only if you choose to enter a
  license key.
- **We do not sell or share personal data**, and we do not use it for
  advertising or profiling.

The rest of this policy is the detail behind those four statements.

---

## 1. Who is responsible

Elsewares, LLC (Elsewares) is the controller of the personal data described
here. Contact: **hello@elsewares.io**, or 7010 N Sheridan Road, Chicago, Illinois.

## 2. What Abstractica does not do

To be explicit, the Software contains:

- no analytics or usage tracking of any kind;
- no crash or error reporting to us;
- no advertising, advertising identifiers, or third-party trackers;
- no user accounts, sign-in, or profile;
- no cloud sync, backup, or upload of your work;
- no access to your files beyond the data directory you use it with.

Except for the license checks described in Section 4, the Software makes no
network requests to us or to anyone else.

## 3. Data stored on your own device

Abstractica keeps everything locally, and this data is never transmitted:

| What | Where |
|---|---|
| Campaigns, journals, characters, notes, custom sheets, tables, oracles, generators, procedures | Your data directory — by default `~/.abstractica`, or a location you choose |
| Application settings | Your operating system's application-config directory for `com.abstractica.app` (`settings.json`) |
| Your license key and cached entitlement, if you have one | The same directory (`license.json`) |
| A random installation identifier (see Section 4) | The same directory, in `settings.json` |

This data is under your control. You can move it, back it up, or delete it, and
uninstalling the application and deleting these directories removes it. We
cannot access it, and we cannot recover it for you if it is lost.

## 4. License activation and validation

If — and only if — you enter a license key, the Software contacts two services
to activate and periodically re-check it.

**What is sent:**

- the license key you entered;
- our Polar organisation identifier (a fixed value compiled into the Software,
  not personal data);
- an **installation identifier**: a random UUID generated once by your copy of
  the Software and stored locally. It is not derived from your hardware, your
  operating system, your network, or anything about you. Its only purpose is to
  let the license system count how many devices a key is active on; and
- the fixed text label `Abstractica`.

**What is never sent:** your name, your email address, your campaign or journal
content, file names, file paths, computer name, IP-derived location, or any
record of what you do in the application.

As with any internet request, the receiving services necessarily observe the
**IP address** the request came from.

**Who receives it:**

- **Polar Software Inc. ("Polar")** — `api.polar.sh` — which issues and
  validates license keys and enforces the device-activation limit.
- **A function we operate on DigitalOcean** — `*.doserverless.co` — which
  re-checks the key with Polar and issues a short-lived signed entitlement so the
  Software keeps working offline. This function does not log the request.

**How often:** once when you activate, and thereafter roughly every 30 days when
a connection is available. If it cannot reach the services, the Software
continues to work offline during a grace period. Deactivating a device sends one
further request to release that activation.

**Legal basis (UK/EU):** performance of the contract between us (Article 6(1)(b)
UK/EU GDPR) — we cannot supply a licensed copy without checking the license.

**If you never enter a license key,** none of this happens and the Software makes
no network requests at all.

## 5. Data we receive when you buy a license

License keys are sold through **Polar**, which acts as **merchant of record**.
Polar — not us — collects and processes your name, email address, billing
address, tax location, and payment details. Polar is the controller for that
processing; see Polar's own privacy notice at
**https://polar.sh/legal/privacy-policy**. We never see your payment card or bank details.

Polar notifies us of purchase events (orders, license-key grants, cancellations,
refunds, and revocations) by webhook. We store the record of each such event —
which typically includes your **name, email address, country, the product bought,
the amount, and the license key issued** — in a private, access-controlled bucket
on **DigitalOcean Spaces**.

- **Why:** to answer support questions ("I never received my key"), to honour
  refunds and revocations, and to keep the accounting and tax records we are
  required to keep.
- **Legal basis:** performance of the contract (Article 6(1)(b)), our legitimate
  interest in supporting and administering the product (Article 6(1)(f)), and
  compliance with legal obligations such as tax record-keeping (Article 6(1)(c)).
- **Retention:** seven years for records with a tax or accounting purpose; other webhook 
records are deleted after 24 months.

## 6. Update checks

Current versions of Abstractica do not check for updates. If a future version
introduces automatic update checking, it will request a small version file from
the public **[elsewares/abstractica-releases](https://github.com/elsewares/abstractica-releases)**
repository on GitHub. That request sends no personal data; GitHub, as the host,
will see the requesting IP address and application version. Downloads are
cryptographically signature-verified before installation. This policy will be
updated when that feature ships.

## 7. Support and correspondence

If you email us or open an issue on our public tracker, we hold what you send —
your email address or GitHub username and the content of your message — for as
long as needed to deal with it and to keep a record of the exchange, on the basis
of our legitimate interest in providing support. Please remember that issues on
a **public** tracker are visible to everyone; do not post your license key or
anything you would not want public.

## 8. The Abstractica website

The abstractica.io website is a static site. It
sets no cookies, runs no analytics, and embeds no third-party trackers. Our
hosting provider keeps standard server access logs, including IP addresses, for
30 days for security and operations. Clicking "Buy" takes you to a checkout
page hosted by Polar, which is governed by Polar's own privacy notice.

## 9. Service providers

| Provider | Role | What they process |
|---|---|---|
| Polar Software Inc. | Merchant of record; license-key issuance and validation | Your purchase details; license key; installation identifier; IP address |
| DigitalOcean, LLC | Hosts our license-signing function and the private storage bucket for purchase records | license key and installation identifier in transit; stored purchase-event records; IP address |
| GitHub, Inc. | Hosts public downloads, the issue tracker, and (in future) the update feed | IP address and request metadata when you download or check for updates; anything you post to the tracker |

We do not sell personal data, we do not share it for cross-context behavioural
advertising, and we use no advertising or analytics providers.

## 10. International transfers

We are based in the United States, and the providers above process data in the United
States and other countries. Where personal data of people in the UK, EEA, or
Switzerland is transferred outside those areas, the transfer relies on the
European Commission's Standard Contractual Clauses (and the UK Addendum where
applicable) as incorporated in our agreements with those providers.

## 11. Your rights

Depending on where you live, you may have the right to **access** the personal
data we hold about you, to have it **corrected** or **deleted**, to **restrict**
or **object to** our processing of it, to receive it in a **portable** format,
and to **withdraw consent** where processing is based on consent.

To exercise any of these, email **hello@elsewares.io**. We will respond within one
month. We will not discriminate against you for making a request. Note that we
identify purchase records by email address, so a request will normally need to
come from — or reference — the address used at checkout.

**If you are in the UK or EEA,** you may also complain to your national data
protection authority (in the UK, the Information Commissioner's Office,
`ico.org.uk`).

**If you are a California resident,** we do not sell or share your personal
information as those terms are defined in the CCPA/CPRA, and we do not process
sensitive personal information for the purpose of inferring characteristics. The
categories we collect are identifiers and commercial information, as described
in Section 5.

## 12. Children

Abstractica is not directed at children under 13 (or under 16 in the EEA/UK), and
we do not knowingly collect their personal data. Because the Software collects
nothing about its users, the only relevant data is purchase data, which is
supplied by the purchaser at checkout. If you believe a child has purchased a
license, contact us and we will delete the record.

## 13. Security

Purchase records are stored in a private bucket with access restricted to us. The
license-signing key is held only in server-side configuration and is never
included in the application. The Software's offline entitlement is
cryptographically signed and verified, so a license status cannot be forged in
transit. No system is perfectly secure, but we hold very little data to begin
with — which is the strongest protection available.

## 14. Changes to this policy

We may update this policy. The version number and effective date at the top will
change, and the current version is always published at
**https://abstractica.io/privacy**. Where a change materially affects how we handle data
already collected, we will say so prominently and, where required, seek consent.

## 15. Contact

Privacy questions and rights requests: **hello@elsewares.io**
Elsewares, LLC (Elsewares), 7010 N Sheridan Road, Chicago, Illinois 60626.
