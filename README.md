# chromatic-test

## chromaui/action@v1

必要そうなオプション、**chromatic** のCLIオプションと等価と思われる

* projectToken - Chromauiの管理画面から参照し、リポジトリのシークレットに追加する
* workingDir - workspacesを使用してパッケージを管理している場合は明示的に指定する
* exitZeroOnChanges - 変更がない場合はスキップする

```yaml
- name: Publish to Chromatic
  uses: chromaui/action@v1
  with:
    projectToken: ${{ secrets.CHROMATIC_PROJECT_TOKEN }}
    workingDir: packages/frontend
    exitZeroOnChanges: true
```

## Storybook

```shell
yarn
yarn storybook
```
