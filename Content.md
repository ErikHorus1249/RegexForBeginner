
/abc/g  - se thuc hien match cac ki tu trong // 
'g' la de duyet toan bo

neu match /./g thi no se match voi toan bo ki tu 
muon match nguyen ky tu dau cham thi phai dung escape character '\'

=> /\./g de match tat ca cac ky tu '.'
lam tuong tu voi dollar sign

* Character Class 

/[fn][1234567890]+/ '+' su dung de chi mot hoac nhieu ki tu dung truoc no

[^abc] not a,b,c

\w : word
\W : not word
\d : digit
\D not digit
\s : whitespace
\S : not whitespace 

/^0[13]\d{9}$/

^(caret)  $ (dollar sign) \b (word bound)

'this is my dog ' match dog 

/\bdog\b/

+ /a+/ ki tu a xuat hien it nhat mot lan
? /a?/ match voi chuoi co a hoac khong co a
* /a*/ match khong hoac nhieu a 
{m} so lan xuat hien
{m,n} /a{2,5}/ match voi a xuat hien 2 den 5 lan
{m,} /a{2,}/ match voi ki tu a xuat hien it nhat 2 lan lien tuc

vd : 0, 100, -50 /-?\d+/

0, 5.5, 10, -5  /-?\d+(\.\d+)?/