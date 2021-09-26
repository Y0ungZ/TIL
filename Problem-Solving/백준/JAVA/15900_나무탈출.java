import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.LinkedList;
import java.util.StringTokenizer;

public class Main {
	static int N;
	static int result;
	static LinkedList<Integer>[] adjList;
	public static void main(String[] args) throws NumberFormatException, IOException {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		 
		N = Integer.parseInt(br.readLine());
		result = 0;
		
		adjList = new LinkedList[N];
		
		for(int i=0;i<N;i++) {
			adjList[i] = new LinkedList<Integer>();
		}
		
		StringTokenizer st;
		for(int i=0;i<N-1;i++) {
			st = new StringTokenizer(br.readLine());
			int A = Integer.parseInt(st.nextToken());
			int B = Integer.parseInt(st.nextToken());
			
			adjList[A-1].add(B-1);
			adjList[B-1].add(A-1);
		}
		
		Escape(0,0,0);
		
		if(result % 2 ==0) {
			System.out.println("No");
		}else {
			System.out.println("Yes");
		}
		
		
	}
	static void Escape(int current, int parent, int cnt) {
		for(int value : adjList[current]) {
			if(value != parent) {
				Escape(value, current, cnt+1);
			}
		}
			
			if(adjList[current].size()==1) {
				result+=cnt;
				return;
			}
	}
}