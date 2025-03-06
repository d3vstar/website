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

- First create a service account with less privilege (roles: Google clud functions invokers and Cloud Run invoker)
- Use Application Default Credentials as Authentication strategy (use case: for smae authority on every call)
    - Impersonate the service account for local development in order to use ADC (Application Default Credentials strategy)

    ```bash
    $ gcloud auth application-default login --impersonate-service-account=<SERVICE_ACCOUNT_EMAIL>
    Your browser has been opened to visit:

        https://accounts.google.com/o/oauth2/auth?response_type=code&client_id=764086051850-6qr4p6gpi6hn506pt8ejuq83di341hur.apps.googleusercontent.com&redirect_uri=http%3A%2F%2Flocalhost%3A8085%2F&scope=openid+https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.email+https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fcloud-platform+https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fsqlservice.login&state=1YtfpcuA3mdXXIKzkU3PCa0Mh2AI0R&access_type=offline&code_challenge=-RqRzvD3fSuFl9goS-IzSVxAIsB7Bu19FytK3h_HfJg&code_challenge_method=S256


    Credentials saved to file: [/Users/d3vrockz/.config/gcloud/application_default_credentials.json]

    These credentials will be used by any library that requests Application Default Credentials (ADC).
    ```
    - Create variable in secret manager and specify the reference in apphosting.yaml

    ```bash
    $ gcloud secrets create GOOGLE_APPLICATION_CREDENTIALS \  
    --replication-policy="user-managed" \
    --locations=us-central1 \
    --data-file="./credentials.json" \
    --project="$(gcloud config get-value project)"
    Created version [1] of the secret [GOOGLE_APPLICATION_CREDENTIALS].
    ```
    **NOTE:** Make sure to be in the right project since the above command will get the value from the current one.

    **NOTE:** We use user-managed and 1 location replication policy for reducing cost (different use case will require change this behavior)

    - Grant access to app hosting using firebase CLI:

    ```bash
    $ firebase apphosting:secrets:grantaccess GOOGLE_APPLICATION_CREDENTIALS --backend <BACKEND_NAME>
    ✔  Successfully set IAM bindings on secret GOOGLE_APPLICATION_CREDENTIALS.
    ```


Verify the secret and its contents

```bash
$ gcloud secrets versions list GOOGLE_APPLICATION_CREDENTIALS --project="$(gcloud config get-value project)"
NAME  STATE    CREATED              DESTROYED
1     enabled  2025-03-06T20:15:24  -
```

Validate access to the secret:
```bash
$ gcloud secrets versions access 1 --secret=GOOGLE_APPLICATION_CREDENTIALS --project="$(gcloud config get-value project)"
```

Before run set the environment variable in your terminal as follow:

```bash
$ ENVIRONMENT_VARIABLE_NAME=$(cat ./path/to/file/with/value.txt)

$ echo $ENVIRONMENT_VARIABLE_NAME | gcloud secrets versions add GOOGLE_CLOUD_FUNCTION_TARGET_AUDIENCE  \
    --data-file=-  
    --project="$(gcloud config get-value project)"

Created version [1] of the secret [GOOGLE_CLOUD_FUNCTION_TARGET_AUDIENCE].
```

