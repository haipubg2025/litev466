const regex = /<json_MC>([\s\S]*?)(?:<\/json_MC>|$)/gi;
const testStr = `
1. <json_update>...</json_update>

<json_MC>
{
  "mcUpdates": {
    "hello": "world"
  }
}
</json_MC>
`;
const match = [...testStr.matchAll(regex)];
console.log(match);
