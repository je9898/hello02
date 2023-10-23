# C:\git-work 경로 진입
# git clone https://github.com/je9898/hello02.git  // 원격저장소에서 로컬저장소로 복제
# git branch -m main  // 메인 브랜치 설정
# git checkout -b develop  // 'devlop' 브랜치 생성 (main의 아래 줄기)
# git checkout -b [featureSon]  // 본인이 작업할 브랜치 생성 (develop의 아래 줄기) 
# 
# 
# * push
# git pull origin develop  // develop 최신상태로 갱신
# git add .  // 로컬저장소 변경내용 추가
# git commit -m ["커밋내용"]  // 로컬저장소에 추가한 내용 commit
# git push origin [featureSon]  // 본인의 브랜치로 push -> 원격 저장소에 본인의 브랜치 만들어짐. (develop의 아래줄기로)
# gitHub -> Pull requests -> feaatureSon을 develop에 pull request 요청하기 -> main 말고 develop으로 요청하세요.
# 
# 
# * pull_01
# git checkout develop  // develop 브랜치로 이동
# git pull origin develop  // 병합된 최신 develop 브랜치 pull
# git checkout [featureSon]  // 본인 브랜치로 이동
# git merge develop  // pull 받은 최신 develop 브랜치를 내 브랜치로 갱신

