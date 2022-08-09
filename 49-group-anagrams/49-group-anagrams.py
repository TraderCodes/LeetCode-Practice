class Solution:
    def groupAnagrams(self, strs: List[str]) -> List[List[str]]:
        h = {}
        for word in strs:
            sortedWord = ''.join(sorted(word))
            if sortedWord not in h:
                h[sortedWord] = [word]
            else:
                h[sortedWord].append(word)
        final = []
        for value in h.values():
            final.append(value)
        return final
    
    
#We recall that anagrams are strings which have identical counts of characters. So anagrams, when sorted, result in the same string. We take advantage of this last property.

#We create a dictionary and for each word in the input array, we add a key to the dictionary if the sorted version of the word doesn't already exist in the list of keys. The key then becomes the sorted version of the word, and the value for the key is an array that stores each anagram of the key. i.e. for every next word that is an anagram, we would sort the word, find the key that is equal to the sorted form, and add the original word to the list of values for the key.

#At the end of it, we just add every value in the dictionary to the final array.