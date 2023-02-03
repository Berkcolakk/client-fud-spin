import { useCallback } from "react";
import LanguageStore from "@stores/LanguageStore";
// import parse from 'html-react-parser'


/**
 * Author: @Berkcolakk
 * This code is an example of a React hook that is used to convert a value into Unicode characters. It imports the lodash library, the useCallback hook from React, and the LanguageStore from the "@stores/LanguageStore" directory. 
The convertValueUnicodeChars() function takes in a value as an argument and creates a temporary element to store the value. It then parses the innerHTML of that element and returns it. 
The useTranslation() function uses the LanguageStore to find a result with a matching key and returns its value if it exists. If no result is found, it returns the key instead. The lang constant is then set to this function which is returned by default when useTranslation() is called.
*/
const useTranslation = () => {
  const store = LanguageStore();

  /**
   * Author: @Berkcolakk
   * @returns If the key value sent in the parameter does not match, the key in the parameter is returned. If it exists, the value translated according to the selected language is returned.
   * @key key value will be translated.
   */
  const lang = useCallback((key: string): any => {
    if (store.CurrentLanguageList.length > 0) {
      const result = store.CurrentLanguageList.find(x => x["Key"] == key);

      return result != undefined ? result?.Value : key;
    }
    else {
      return key;
    }

  }, [store.CurrentLanguageList])

  return { lang };
}
export default useTranslation;