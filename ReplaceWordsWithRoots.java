import java.util.*;

public class ReplaceWordsWithRoots {
    public static String replaceWords(List<String> dictionary, String sentence) {
        // Sort the dictionary by length of the roots
        Collections.sort(dictionary, Comparator.comparingInt(String::length));

        // Split the sentence into words
        String[] words = sentence.split(" ");

        // Replace words with their corresponding root
        for (int i = 0; i < words.length; i++) {
            words[i] = replaceWord(dictionary, words[i]);
        }

        // Join the replaced words back into a sentence
        return String.join(" ", words);
    }

    private static String replaceWord(List<String> dictionary, String word) {
        for (String root : dictionary) {
            if (word.startsWith(root)) {
                return root;
            }
        }
        return word;
    }

    public static void main(String[] args) {
        List<String> dictionary = Arrays.asList("cat", "bat", "rat");
        String sentence = "the cattle was rattled by the battery";
        System.out.println(replaceWords(dictionary, sentence));  // Output: "the cat was rat by the bat"
    }
}
