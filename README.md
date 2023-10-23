# C:\git-work 경로 진입
# git clone https://github.com/je9898/hello02.git  // 원격저장소에서 로컬저장소로 복제
# git branch -m main  // 메인 브랜치 설정
# git checkout -b develop  // 'devlop' 브랜치 생성 (main의 아래 줄기)
# git checkout -b [featureSon]  // 본인이 작업할 브랜치 생성 (develop의 아래 줄기) 
# 
# 
# * push
# git add .  // 로컬저장소 변경내용 추가
# git commit -m ["커밋내용"]  // 로컬저장소에 추가한 내용 commit
# git push origin [featureSon]  // 본인의 브랜치로 push -> 원격 저장소에 본인의 브랜치 만들어짐. (develop의 아래줄기로)
# gitHub -> Pull requests -> feaatureSon을 develop에 pull request 요청하기 -> main 말고 develop으로 요청하세요.
# 
# 
# * pull_01
# git checkout develop  // develop 브랜치로 이동
# git branch -d [featureSon]  // 본인 브랜치 삭제
# git pull origin develop  // 병합된 최신 develop 브랜치 pull
# git checkout -b [featureSon]  // 본인이 작업할 브랜치 생성
#
#
# * pull_02 (안전함)
# git checkout develop  // develop 브랜치로 이동
# git branch -d [featureSon]  // 본인 브랜치 삭제
# git fetch  // 브랜치 변경내역 확인
# git merge origin/develop  // 원격저장소 > 로컬저장소 변경내역 merge
# git checkout -b [featureSon]  // 본인이 작업할 브랜치 생성
