---
workflow "Update JSON" {
  on = "push"
  resolves = ["Update JSON"]
}

action "Update JSON" {
  uses = "marvinpinto/action-automatic-releases@latest"
  secrets = ["MOVIES_TOKEN"]
  args = "node index.js"
}
