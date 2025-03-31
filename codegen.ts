import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: "https://countries.trevorblades.com/",
  documents: "src/**/*.graphql",
  generates: {
    "src/shared/api/generated/graphql.ts": {
      plugins: [
        'typescript',
        'typescript-operations',
        'typescript-react-apollo',
      ],
      config: {
        withHooks: true,
      },
    }
  }
};

export default config;
