# grahame.com

Grahame Murray's personal website builder

```shell
brew install hugo
export RESUME_ROOT=../resume
rsync -va $RESUME_ROOT/dist/* static/resume/
rsync -va $RESUME_ROOT/dist/grahame_murray_resume.md content/resume/index.md
hugo
firebase deploy
```
