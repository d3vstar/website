This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

## Deploy to firebase APP Hosting

### Secrets:

```bash
$gcloud secrets create GOOGLE_CLOUD_FUNCTION_CREDENTIALS_FILE \
--replication-policy="user-managed" \
--locations=us-central1 \
--data-file="./credentials.json" \
--project="$(gcloud config get-value project)" 

Created version [1] of the secret [GOOGLE_CLOUD_FUNCTION_CREDENTIALS_FILE].

**NOTE:** Make sure to be in the right project since the above command will get the value from the current one.

**NOTE:** We use user-managed and 1 location replication policy for reducing cost (different use case will require change this behavior)
```

Before run set the environment variable in your terminal as follow:

```bash
$ ENVIRONMENT_VARIABLE_NAME=$(cat ./path/to/file/with/value.txt)

$ echo $ENVIRONMENT_VARIABLE_NAME | gcloud secrets versions add GOOGLE_CLOUD_FUNCTION_TARGET_AUDIENCE  \
    --data-file=-  
    --project="$(gcloud config get-value project)"

Created version [1] of the secret [GOOGLE_CLOUD_FUNCTION_TARGET_AUDIENCE].
```

