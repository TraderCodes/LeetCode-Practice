/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let empty='',bool=true
for(let i=0;i<strs[0].length;i++)
{
  for(let j=1;j<strs.length;j++)
  {
    if(strs[j][i]!==strs[0][i])
    {
      bool=false
      
      break
    }
  }
if(bool==true)
{
  empty+=strs[0][i]
}
}
return empty
};