import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.HashSet;
import java.util.Set;
import java.util.StringTokenizer;

public class Main {

	public static void main(String[] args) throws NumberFormatException, IOException {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		Set<Integer> set = new HashSet<>();
		int M = Integer.parseInt(br.readLine());
		StringTokenizer st;
		StringBuilder sb = new StringBuilder();
		
		for(int m=0;m<M;m++) {
			st = new StringTokenizer(br.readLine());
			String command = st.nextToken();
	
			switch (command) {
			case "add":
				set.add(Integer.parseInt(st.nextToken()));
				break;
			case "remove":
				set.remove(Integer.parseInt(st.nextToken()));
				break;
			case "check":
				if(set.contains(Integer.parseInt(st.nextToken()))) {
					sb.append(1+"\n");
				}else {
					sb.append(0+"\n");
				}
				break;
			case "toggle":
				int number =Integer.parseInt(st.nextToken());		
				
				if(set.contains(number)) {
					set.remove(number);
				}else {
					set.add(number);
				}
				break;
			case "all":				
				for(int i=1;i<21;i++) {
					set.add(i);
				}				
				break;
			case "empty":				
				set.clear();			
				break;
			default:
				break;
			}		
		}
		System.out.println(sb.toString());
	}

}