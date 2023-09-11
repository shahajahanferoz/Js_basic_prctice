
function RandomNameGenerate({setRandomName}) {

    function makeName(length) {
        let result = '';
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        const charactersLength = characters.length;
        let counter = 0;
        while (counter < length) {
          result += characters.charAt(Math.floor(Math.random() * charactersLength));
          counter += 1;
        }
        return result;
    }
    
  return (
    <div>
        <button onClick={()=>setRandomName(makeName(5))}>Generate Name</button>
    </div>
  )
}

export default RandomNameGenerate