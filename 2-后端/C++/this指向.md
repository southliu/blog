## this指向
### 作用：this指针指向被调用的成员函数所属的对象。
```cpp
class Person {
public:
	int age;
	void setAge(int age) {
		// 解决名称冲突
		this->age = age;
	};
	// 累加年龄
	Person addAge(Person &p) {
		p.age += 10;
		return *this;
	};
};

void main() {
	Person p1;
	p1.setAge(10);
	cout << "p1.age:" << p1.age << endl; // 10
	p1.addAge(p1).addAge(p1).addAge(p1);
	cout << "p1.age:" << p1.age << endl; // 40
	system("pause");
}
```