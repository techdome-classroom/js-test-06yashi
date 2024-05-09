const decodeTheRing = function (s, p) {

 
    if (s.length !== p.length) {
        return false;
    }

  
    for (let i = 0; i < s.length; i++) {
        const messageChar = s[i];
        const patternChar = p[i];

       
        if (patternChar === '?') {
            continue;
        }

      
        if (patternChar === '*') {
          
            while (p[i + 1] === '?') {
                i++;
            }
           
            if (i === p.length - 1) {
                return true;
            }
         
            const nextIndex = s.indexOf(p[i + 1], i + 1);
           
            if (nextIndex === -1) {
                return false;
            }
            
            i = nextIndex - 1;
            continue;
        }

       
        if (messageChar !== patternChar) {
            return false;
        }
    }

    
    return true;
};


  
  module.exports = decodeTheRing;